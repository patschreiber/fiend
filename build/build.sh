#!/bin/sh

RELEASE=$1

full_test() {
  yarn run lint
  yarn run test-types
  yarn run jest
}

build() {
  gulp
  gulp docgen
  yarn version
}

echo "Running tests and linters..."
echo "Jest, eslint"
full_test
echo "\n"
echo "...done!"

echo "Running gulp build and docgen..."
build
echo "\n"
echo "...done!"

echo "Bumping project version with yarn version."
if ($RELEASE) {
  echo "This compilation was denoted as a release, so it gets a version upgrade."
  yarn version --patch
} else {
  echo "This compilation was denoted as a non-release build, so the prerelease build version will be bumped."
  yarn version --prerelease
}
