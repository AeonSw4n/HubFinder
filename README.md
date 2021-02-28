# How To Pass BU Hub with Minimal Course Scheduling
## Step 1
1. Visit this site:
[Course Search](https://www.bu.edu/phpbin/course-search)

2. Choose the Spring 2021 semester
3. In additional search options, select CAS, or any college you want.
4. Click Search
5. Change the field saying "10 per page" to "ALL"
6. Wait for the page to refresh
7. Open Javascript Dev Console
8. Paste the __scraper.js__ code
9. Now it will produce a biiig log. Copy the entire message, save it as __course.json__ in the same location as __script.js__

## Step 2
1. You'll need to tune the algo to the Hub units you're interested in.

2. Modify the list __options__ with the units you want

Now all the magic happens in the code following the declaration of __options__. You'll need to do use the power of programming and some trial and error to make it usable for you. Let's first think of the problem of distributing the hub requirements into x courses. There is probably a nice solution to it, if we were to turn it into a knapsack problem. But I'm lazy so I just bruteforced it.

You need trial & error to find the minimum number of courses, and the partitioning of units within those courses. For me it was 3 courses and I tried this:
- 1st course (group A) will fulfill 3 requirements
- 2nd course (group B) will fulfill another 3 requirements
- 3rd course (group C) will fulfill 2 requirements.

Other possible partitions could be e.g. (4,3,1), (4,2,2). In my solution, I permute all the courses in options, then based on the partitioning of units I chose (say 3,3,2), I find all courses that fulfill the first 3 units in the permutation to make group A, then all courses that fulfill the next 3 units for group B, then all courses that fulfill the next 2 units for group C. I check all permutations. The outcome of the code will be the possible distributions of courses in the categories you designate. You only need to take 1 course from each category to fulfill all the requirements. If you want to see an example of how the code works, use the course-test.json.

3. Figure out the minimum number of sections you need (a course can fulfill 3 units max)

4. Find the right partition of hub units.

## Good luck!
