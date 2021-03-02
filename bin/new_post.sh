# !/bin/bash

DATE=`date +"%Y-%m-%d"`
PATTERN="date: 2018-01-01"
REPLACE="date: ${DATE}"
OUTPUT=../contents/posts/${DATE}.md

cp ../contents/posts/template.md ${OUTPUT}

awk '{sub('/"${PATTERN}"'/,"'"${REPLACE}"'")}{print}' ${OUTPUT} > ${OUTPUT}.tmp

mv ${OUTPUT}.tmp ${OUTPUT}

cat ../contents/data.json | jq --arg a ${DATE}.md '[{"path": $a}] + .' > ../contents/_data.json 

mv ../contents/_data.json ../contents/data.json
