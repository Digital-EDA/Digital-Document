import os

with open('./src/zh/guide/language-service.md', 'r', encoding='utf-8') as fp:
    text = fp.read()

count = 0
en_files = [
    "ls-language-highlight",
    "ls-syntax-diagnosis",
    "ls-outline",
    "ls-hover-tips",
    "ls-completion",
    "ls-definition-jumps",
    "ls-code-formatter",
    "ls-vhdl-to-verilog-translation"
]

en_file_cnt = 0

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
        en_title = en_files[en_file_cnt]
        en_file_cnt += 1
        file_name = '{}.md'.format(en_title)
        save_path = './src/zh/guide/' + file_name
        print('"{}",'.format(file_name.rstrip('.md')))
        open(save_path, 'w', encoding='utf-8').write(meta + '\n' + content.strip())