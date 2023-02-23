# Makefile
brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

install:
	npm ci

lint:
	npx eslint .