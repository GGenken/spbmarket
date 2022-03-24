import requests
import json
import wikitextparser as wtp

baseurl = 'https://minecraft.fandom.com/api.php'

# blocks_page_name = 'Bedrock Edition data values/Blocks'
# blocks_page_response = requests.get(baseurl,
#                       params = {
#                           'action': 'query',
#                           'prop': 'revisions',
#                           'rvprop': 'content',
#                           'format': 'json',
#                           'rvslots': 'main',
#                           'titles': blocks_page_name
#                       }
# ).json()
# blocks_page = blocks_page_response['query']['pages']['183332']['revisions'][0]['slots']['main']['*']
# blocks_page_parsed = wtp.parse(blocks_page)
# blocks_table_rows = blocks_page_parsed.templates
#
# blocks = {}
#
# for row in range(len(blocks_table_rows)):
#     blocks[row] = {}
#     for arg in blocks_table_rows[row].arguments:
#         blocks[row][arg.name] = arg.value
#
# with open('blocks_page.json', 'w') as f:
#     f.write(json.dumps(blocks))
#     f.close()
#
# blocks_final = {}
# for block in blocks.values():
#     if 'dv' in block.keys() and 'nameid' in block.keys() and '1' in block.keys():
#         blocks_final[block['dv']] = {
#             'id': block['dv'],
#             'str_id': block['nameid'],
#             'name': block['1'],
#         }
#     if 'link' in block.keys():
#         blocks_final[block['dv']]['link'] = block['link']
#
#     if 'icon' in block.keys():
#         blocks_final[block['dv']]['icon'] = block['icon']
#
# with open('blocks.json', 'w') as f:
#     f.write(json.dumps(blocks_final))
#     f.close()





items_page_name = 'Bedrock Edition data values/Items'
items_page_response = requests.get(baseurl,
                      params = {
                          'action': 'query',
                          'prop': 'revisions',
                          'rvprop': 'content',
                          'format': 'json',
                          'rvslots': 'main',
                          'titles': items_page_name
                      }
).json()
items_page = items_page_response['query']['pages']['183323']['revisions'][0]['slots']['main']['*']
items_page_parsed = wtp.parse(items_page)
items_table_rows = items_page_parsed.templates

items = {}

for row in range(len(items_table_rows)):
    items[row] = {}
    for arg in items_table_rows[row].arguments:
        items[row][arg.name] = arg.value

with open('items_page.json', 'w') as f:
    f.write(json.dumps(items))
    f.close()

items_final = {}
for item in items.values():
    if 'dv' in item.keys() and 'nameid' in item.keys() and '1' in item.keys():
        items_final[item['dv']] = {
            'id': '2' + str(item['dv']),
            'str_id': item['nameid'],
            'name': item['1'],
        }
    if 'link' in item.keys():
        items_final[item['dv']]['link'] = item['link']

    if 'icon' in item.keys():
        items_final[item['dv']]['icon'] = item['icon']

with open('items.json', 'w') as f:
    f.write(json.dumps(items_final))
    f.close()
