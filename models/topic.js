import mongoose, {Schema} from "mongoose";

const topicSchema = new Schema(
    {
        hemoglobina: String,
        hematocrito: String
    },{
        timestamps: true,
    }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema) ;

export default Topic;