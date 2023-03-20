#include <stdlib.h>
#include "linkedlist.h"
void deleteAtFirst(struct node **head){
    struct node *temp=*head;
    *head=temp->next;
}