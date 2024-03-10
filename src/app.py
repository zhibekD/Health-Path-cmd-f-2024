import cohere
import sqlite3
import os

COHERE_KEY = open('../cohere_api.txt').read()
co = cohere.Client(COHERE_KEY)
src_dir = os.path.dirname('src')
database_file = os.path.join(src_dir,'local_hospitales.sqlite')

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






