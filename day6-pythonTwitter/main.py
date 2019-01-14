#!/usr/bin/env python3
from twython import Twython
import pandas as pd
import re


def clean_tweet(tweet):
    return ' '.join(
        re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t]) |(\w+:\/\/\S+)", " ", tweet).split())


credentials = {}
credentials['CONSUMER_KEY'] =
credentials['CONSUMER_SECRET'] =
credentials['ACCESS_TOKEN'] =
credentials['ACCESS_SECRET'] =

python_tweets = Twython(
    credentials['CONSUMER_KEY'], credentials['CONSUMER_SECRET'])

tweets = []
query = input("Enter key word to search on: ")


key_word = input("Word to search for in tweets: ")
for status in python_tweets.search(q=query, count=100, result_type='popular', tweet_mode='extended')['statuses']:
    tweets.append(status['full_text'])

for tweet in tweets:

    if(key_word in tweet):
        tweet = clean_tweet(tweet)
        print(tweet + '\n')
