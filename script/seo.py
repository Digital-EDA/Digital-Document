from typing import Tuple, List, Type
from urllib.parse import urlparse, ParseResult

import requests as r
from bs4 import BeautifulSoup, Tag
import time

URL = Type[str]

_visited = set()

def get_all_links(url: URL) -> List[URL]:
    global _visited
    
    if url in _visited:
        return []
    else:
        _visited.add(url)

    url_info: ParseResult = urlparse(url)
    res = r.get(url)
    html = res.content

    soup = BeautifulSoup(html, 'html.parser')
    current_links = set()
    for a_element in soup.find_all('a'):
        a_element: Tag
        link = a_element.attrs['href']
        clear_link = link.strip('/')

        if link.startswith('http'):
            link_info = urlparse(link)
            if link_info.hostname == url_info.hostname and clear_link != url.rstrip('/'):
                current_links.add(clear_link)
        elif link.startswith('/'):
            assert not clear_link.startswith('http')
            target_url = 'https://{}/{}'.format(url_info.hostname, clear_link)
            current_links.add(target_url)
    
    not_visited_links = current_links - _visited
    
    all_links = list(not_visited_links)
    all_links.append(url)
    
    for not_visited_link in not_visited_links:
        links = get_all_links(not_visited_link)
        all_links.extend(links)
    all_links = list(set(all_links))
    return all_links

if __name__ == '__main__':
    # links = get_all_links('https://sterben.nitcloud.cn/')
    links = get_all_links('https://med.emory.edu/departments/radiation-oncology/research-laboratories/deformable-image-registration/downloads-and-reference-data/4dct.html')
    all_links = set()
    for link in links:
        all_links.add(link.split('#')[0])
    
    for link in all_links:
        print(link)