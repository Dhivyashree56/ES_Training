#include <stdlib.h>
#include "linkedlist.h"
int search(struct node *head,int key){
    struct node *temp=head;
    while(temp!=NULL){
        if(temp->data==key)
            return 1;
        temp=temp->next;
    }
    return 0;
}