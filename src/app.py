# ## Setting up Cohere

import sys
print(sys.path)
sys.path.append('')

import cohere
# co = cohere.Client('KJ8iAaWa0pnbcWgxwfPjAE6HrYz5llZTMQ63wDpG')

import numpy as np
import re
import pandas as pd
from tqdm import tqdm
from datasets import load_dataset
import umap
import altair as alt
from sklearn.metrics.pairwise import cosine_similarity
from annoy import AnnoyIndex
import warnings
warnings.filterwarnings('ignore')
pd.set_option('display.max_colwidth', None)


