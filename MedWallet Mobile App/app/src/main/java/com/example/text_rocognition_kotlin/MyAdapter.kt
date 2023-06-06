package com.example.text_rocognition_kotlin

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class MyAdapter (private  val userList: ArrayList<Drug>):
    RecyclerView.Adapter<MyAdapter.MyViewHolder>(){
    class MyViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){


        val drugname: TextView = itemView.findViewById(R.id.tvdrugname)
        val manufacturer: TextView = itemView.findViewById(R.id.tvmanufacturer)
        val description: TextView = itemView.findViewById(R.id.tvdescription)
        val side_effect: TextView = itemView.findViewById(R.id.tvside_effect)
        val price: TextView = itemView.findViewById(R.id.tvprice)

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {

        val itemView= LayoutInflater.from(parent.context).inflate(R.layout.item,parent,false)
        return MyViewHolder(itemView)
    }

    override fun getItemCount(): Int {
      return  userList.size
    }

    override fun onBindViewHolder(holder: MyViewHolder, position: Int) {

        holder.drugname.text=userList[position].drugname
        holder.manufacturer.text=userList[position].manufacturer
        holder.description.text=userList[position].description
        holder.side_effect.text=userList[position].side_effect
        holder.price.text=userList[position].price
    }
}