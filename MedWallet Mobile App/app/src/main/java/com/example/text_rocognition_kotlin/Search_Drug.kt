package com.example.text_rocognition_kotlin

import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.Query
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase

class Search_Drug : AppCompatActivity() {

    companion object {
        const val EXTRA_TEXT_VALUE = "text"
    }

    private lateinit var x: String
    private lateinit var recyclerView: RecyclerView
    private lateinit var userList: ArrayList<Drug>
    private var db: FirebaseFirestore = Firebase.firestore

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_search_drug)

        recyclerView = findViewById(R.id.recyclerview)
        recyclerView.layoutManager = LinearLayoutManager(this)

        userList = arrayListOf()
        db = FirebaseFirestore.getInstance()

        x = intent.getStringExtra(EXTRA_TEXT_VALUE).toString()
        Log.d("Search_Drug", "word: $x")

        val collectionRef = db.collection("drugs")
        val query: Query = if (x!=null && x.isNotEmpty()) {

            collectionRef.whereEqualTo("drugname", x)

        } else {
            collectionRef
        }

        query.get().addOnSuccessListener { querySnapshot ->
            userList.clear()

            if (querySnapshot.isEmpty) {
                Toast.makeText(this, "No matching documents found", Toast.LENGTH_SHORT).show()

                // Show complete drugs collection
                collectionRef.get().addOnSuccessListener { completeSnapshot ->
                    for (documentSnapshot in completeSnapshot) {
                        val drug = documentSnapshot.toObject(Drug::class.java)
                        userList.add(drug)
                    }

                    val adapter = MyAdapter(userList)
                    recyclerView.adapter = adapter
                }.addOnFailureListener { exception ->
                    Toast.makeText(this, exception.toString(), Toast.LENGTH_SHORT).show()
                }
            } else {
                for (documentSnapshot in querySnapshot) {
                    val drug = documentSnapshot.toObject(Drug::class.java)
                    userList.add(drug)
                }

                val adapter = MyAdapter(userList)
                recyclerView.adapter = adapter
            }
        }.addOnFailureListener { exception ->
            Toast.makeText(this, exception.toString(), Toast.LENGTH_SHORT).show()
        }
    }
}

