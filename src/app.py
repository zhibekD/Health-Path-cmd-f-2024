import cohere
import sqlite3
import os

co = cohere.Client('KJ8iAaWa0pnbcWgxwfPjAE6HrYz5llZTMQ63wDpG')
src_dir = os.path.dirname('src')
database_file = os.path.join(src_dir,'local_hospitales.sqlite')

# retrieve the reviews and summarize them
# conn = sqlite3.connect('local_hospitales.sqlite')
# cursor = conn.cursor()

# # Select reviews from the database
# cursor.execute("SELECT reviews FROM hospitales")
# reviews_data = cursor.fetchall()

# # Extract reviews from the result
# reviews = [row[0] for row in reviews_data]

# # Combine all reviews into a single string
# all_reviews = ' '.join(reviews)


# response = co.summarize(
#     text=all_reviews,
#     model='command',
#     length='medium',
#     extractiveness='medium'
# )

# summary = response.summary

# print(summary)

# conn.close()

def loadreviewsfromdatabase(databasefile):
    print("Current working directory:", os.getcwd())
    conn = sqlite3.connect(databasefile)
    cursor = conn.cursor()
    cursor.execute("SELECT reviews FROM hospitales")
    reviews = cursor.fetchall()
    conn.close()
    return reviews

def process_reviews(reviews):
    for review in reviews:
        summarize(review[0])


def summarize(review):
    response= co.summarize(
        text=review,
        model='command',
        length='medium',
        extractiveness='medium'
    )
    summary = response.summary
    print("Summary:", summary)
    print(summary)


r = loadreviewsfromdatabase(database_file)

process_reviews(r)

co.close()






