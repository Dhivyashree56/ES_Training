//C program to search an element in the linked list
#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *next;
};
void insertAtLast(struct node **head,int n){
    struct node *newNode=(struct node*)malloc(sizeof(struct node));
    newNode->data=n;
    newNode->next=NULL;
    struct node *temp=*head;
    if(*head==NULL){
        *head=newNode;
    }
    else{
        while(temp->next!=NULL){
            temp=temp->next;
        }
        temp->next=newNode;
    }
}
void display(struct node *head){
    struct node *temp=head;
    printf("The elements in the linked list are:\n");
    while(temp!=NULL){
        printf("%d->",temp->data);
        temp=temp->next;
    }
    printf("NULL\n");
}
int search(struct node *head,int key){
    struct node *temp=head;
    while(temp!=NULL){
        if(temp->data==key)
            return 1;
        temp=temp->next;
    }
    return 0;
}

int main(){
    struct node *head=NULL;
    int n,d,key;
    printf("Enter the no.of.nodes:");
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        scanf("%d",&d);
        insertAtLast(&head,d);
    }
    display(head);
    printf("Enter the key value:\n");
    scanf("%d",&key);
    int flag=search(head,key);
    if(flag==0)
        printf("The given element is not present in the linked list");
    else
        printf("The given element is present in the linked list");
    return 0;
}
