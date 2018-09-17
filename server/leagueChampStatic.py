import boto3 as b
import requests

s3 = b.client('s3')
filename = 'championData.json'
bucket_name = 'league-champion-static-data'
f = open(filename, 'w+')
url = 'https://na1.api.riotgames.com/lol/platform/v3/champion-rotations'
headers = {'X-Riot-Token': 'RGAPI-009d13ad-abb5-44c1-aec7-61bbcd329ac3'}
r = requests.get(url, headers=headers)
data = r.text

f.write(data)
f.close()
s3.upload_file(filename, bucket_name, filename)
