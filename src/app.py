## Setting up Cohere

import cohere
co = cohere.Client('KJ8iAaWa0pnbcWgxwfPjAE6HrYz5llZTMQ63wDpG')

# Example of using a Cohere API method
response = co.summarize(
    text = 'text')

print(response)