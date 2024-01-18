import os

with open('./src/guide/language-service.md', 'r', encoding='utf-8') as fp:
    text = fp.read()

count = 0
for section in text.split('---'):
    count += 1
    section_content = section.strip()
    if count >= 3:
        if not section_content.startswith('##'):
            section_content = section_content.split('\n')[1:]
            section_content = '\n'.join(section_content).strip()
        
        if not section_content.startswith('##'):
            print('warning', section_content)
            continue
        title = section_content.split('\n')[0][3:]
        content = '\n'.join(section_content.split('\n')[1:])
        meta = '---\ntitle: {}\n---\n'.format(title)
        file_name = 'ls-{}.md'.format(title.lower().replace(' ', '-'))
        save_path = './src/guide/' + file_name
        print('"{}",'.format(file_name.rstrip('.md')))
        # open(save_path, 'w', encoding='utf-8').write(meta + '\n' + content.strip())