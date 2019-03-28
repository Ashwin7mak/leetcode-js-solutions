# DESCRIPTION

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 1:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49

Example 2:

Input : [1, 5, 4, 3]
Output : 6

Explanation : 
5 and 3 are distance 2 apart. 
So the size of the base = 2. 
Height of container = min(5, 3) = 3. 
So total area = 3 * 2 = 6

Example 3:

Input : [3, 1, 2, 4, 5]
Output : 12