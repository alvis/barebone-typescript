#!/bin/sh

LOCAL_BRANCH=$(git rev-parse --abbrev-ref HEAD) # local branch
REMOTE=$(git config branch.${LOCAL_BRANCH}.remote) # the default remote
REMOTE_BRANCH=$(git config branch.${LOCAL_BRANCH}.merge) # the default remote branch
REMOTE_BRANCH_REFERENCE=${REMOTE_BRANCH/refs\/heads\//} # the reference name of the remote branch

REVS=$(git rev-list --reverse "$(git rev-parse --abbrev-ref HEAD)" --abbrev-commit --not --remotes);

for REV in $REVS
do
  git push ${REMOTE} ${REV}:${REMOTE_BRANCH_REFERENCE}
done