#include <stdlib.h>
#include "linkedlist.h"
void deleteAtMiddle(struct node **head,int pos){
    struct node *temp=*head;
    for(int i=1;i<pos-1;i++){
        temp=temp->next;
    }
    temp->next=temp->next->next;
}