from pprint import pprint
from elasticsearch import Elasticsearch

es = Elasticsearch('http://localhost:9200')
client_info = es.info()
print('Connected to Elasticsearch!')
pprint(client_info.body)

#create index
es.indices.delete(index='my_index', ignore_unavailable=True)
es.indices.create(
    index="my_index",
    settings={
        "index": {
            "number_of_shards": 3,  # how many pieces the data is split into
            "number_of_replicas": 2  # how many copies of the data
        }
    },
)

#create records
document = {
    'title': 'title',
    'text': 'text',
    'created_on': '2024-09-22',
}
response = es.index(index='my_index', body=document)

print(response["result"])