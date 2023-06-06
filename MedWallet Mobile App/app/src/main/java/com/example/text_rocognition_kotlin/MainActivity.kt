package com.example.text_rocognition_kotlin

import android.content.Intent
import android.graphics.Bitmap
import android.os.Bundle
import android.provider.MediaStore
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.DataBindingUtil
import com.example.text_rocognition_kotlin.databinding.ActivityMainBinding
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.text.TextRecognition
import com.google.mlkit.vision.text.latin.TextRecognizerOptions

class MainActivity : AppCompatActivity() {
    // text detection part
    private val recognizer = TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS)
    private lateinit var binding: ActivityMainBinding
    private val REQUEST_IMAGE_CAPTURE = 1
    private var imageBitmap: Bitmap? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)

        binding.apply {
            captureImage.setOnClickListener {
                takeImage()
                textView.text = ""
            }

            detectTextImageBtn.setOnClickListener {
                processImage()
            }
            searchDragBtn.setOnClickListener {
                val text = textView.text.toString()
                if (text.isNotEmpty()) {
                    val intent = Intent(this@MainActivity, Search_Drug::class.java)
                    intent.putExtra("text", text)
                    startActivity(intent)
                } else {
                    Toast.makeText(this@MainActivity, "No text to search", Toast.LENGTH_SHORT).show()
                }
            }
        }
    }

    private fun processImage() {
        if (imageBitmap != null) {
            val image = imageBitmap?.let { InputImage.fromBitmap(it, 0) }

            image?.let {
                recognizer.process(it)
                    .addOnSuccessListener { visionText ->
                        val text = visionText.text
                        binding.textView.text = text
                    }
                    .addOnFailureListener {
                        Toast.makeText(this, "No text detected", Toast.LENGTH_SHORT).show()
                    }
            }
        } else {
            Toast.makeText(this, "Please select an image first", Toast.LENGTH_SHORT).show()
        }
    }

    private fun takeImage() {
        val intent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
        try {
            startActivityForResult(intent, REQUEST_IMAGE_CAPTURE)
        } catch (e: Exception) {
            // Handle exception
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == REQUEST_IMAGE_CAPTURE && resultCode == RESULT_OK) {
            val extras: Bundle? = data?.extras
            imageBitmap = extras?.get("data") as Bitmap

            if (imageBitmap != null) {
                binding.imageView.setImageBitmap(imageBitmap)
            }
        }
    }
}
