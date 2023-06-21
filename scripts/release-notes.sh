export TAG=$(echo $GITHUB_REF_NAME | sed -e 's/v//')
echo $TAG
awk -v ver="$GITHUB_REF_NAME" '
	/^#+ \[/ { if (p) { exit }; if ($2 == "["ver"]") { p=1; next} } p
	' CHANGELOG.md | sed '${/^[[:space:]]*$/d;}' > RELEASE_NOTES.md

node ./scripts/send-slack-message.cjs