# Linked Lists

### General Notes

Linked lists are like arrays in that they can contain strings, characters and numbers,
and that they can be sorted or unsorted. The major difference is that an array can
be indexed to easily access any given node _O(1)_. Linked lists, however, require
that you move from the head down to the desired node rather than calling directly
on it. This makes for a slower linear process _O(N)_.

#### General Structure of Linked List

Linked lists consist of a head (the first node in the list) and follows by a node
that links to the next node. The final node points to `null`.

_Note: Doubly Linked Lists are ones that the node access to the previous node
and the next node. (Chemistry reference: reversible reaction)._

#### Why Use Linked Lists?

Adding or removing a linked list item from the head or end of the list is a fast
process _O(1)_. Additionally, adding or removing a node from within the list does
not require reorganization of the entire data structure.

Linked lists can also grow or shrink in size as needed (i.e. not fixed). It also
allocates memory as the list grows. This requires that the upper limit of the list
is known as allocated memory is typically equal to the upper limit.
