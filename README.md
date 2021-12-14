Motivation: given large existing codebase, run several permutations of `dprint` configurations and compare the diffs.
Choose the configuration which results in the smallest diff.

This is a small script to help me do that.  It's hardcoded for one project.  The idea is, if you want to use it for your
project, you modify the script, run it, rinse, repeat.  Once you've settled on a `dprint` config you like, there is no
need to run this script ever again.