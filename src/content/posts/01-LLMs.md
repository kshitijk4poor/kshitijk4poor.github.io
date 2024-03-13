---
title: "LLMs"
publishedAt: 2024-05-13
description: "notes on LLMs"
slug: "llm"
isPublish: true
---
LLMs are like autocomplete tools (they predict the next word based on the text you've provided). it is built on top of transformers. 

LLMs are lare language models that are trained on milions of data/text to give human like responses. the model uses the training data to understand the patterns and relationship between the words to predict the next word.

what are [tokens](src\content\posts\03-tokens.md)?

tokens are numerical representation of words (not really but like parts of words). numbers are used used instead of alphabets to denote because they are easier to denote token IDs and easier to process.

chatGPT is nothing but a model trained on hundreds of billions of words. and all it does is to predict the next token given a sequence of input tokens (gramatically correct based on its understanding of patterns and relationships of the input data provided).

The first thing to explain is that what ChatGPT is always fundamentally trying to do is to produce a “reasonable continuation” of whatever text it’s got so far, where by “reasonable” we mean “what one might expect someone to write after seeing what people have written on billions of webpages, etc.”

chatgpt finds the probability for the next word and picks it but however if we go by picking the most probable word we will have a very redundant and 'flat' answer. to fix this we have something called "temperature" which determines how often lower ranked words will be used.

LLMs are better to write code/program because there is a very limited set of keywords (AKA identifiers) that it has to understand and then using that it can build programs whereas languages can be complex as different languages have different sets of rules which are nuanced and thus harder to comprehend. before transformers(built on Convulational neural network ) were introduced. Recurrent Neural Network(RNNs) were used to understand text and the way it worked was sequentially which sometimes might not translate to the correct intended purpose/meaning. 

eg. “Jane went looking for trouble.”

means something very different from the sentence:

“Trouble went looking for Jane”

moreover RNNs had context problems. while reading a long paragraph a RNN might have trouble remembering the gender of the subject. 

Transformers were the first of the models to train and scale with massive datasets successfully.  