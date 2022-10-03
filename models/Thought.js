const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

// Virtual that gets amount of reactions to each thought
thoughtSchema.virtual("getReactions").get(function () {
  return this.reactions.length;
});

// Initialize Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
