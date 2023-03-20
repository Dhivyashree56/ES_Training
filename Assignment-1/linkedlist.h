#ifndef LINKEDLIST_H
#define LINKEDLIST_H
struct node
{
    int data;
    struct node *next;
};
void insertAtBeginning(struct node **head,int n);
void insertAtLast(struct node **head,int n);
void insertAtMiddle(struct node **head,int n,int pos);
void deleteAtFirst(struct node **head);
void deleteAtLast(struct node **head);
void deleteAtMiddle(struct node **head,int pos);
int search(struct node *head,int key);
void display(struct node *head);
#endif