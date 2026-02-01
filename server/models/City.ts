import { Schema, model } from 'mongoose'

const citySchema = new Schema(
  {
    cityName: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    country: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
    dishName: {
      type: String,
      required: true,
    },
    dishDescription: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true },
)

export default model('City', citySchema)
