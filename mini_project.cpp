#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int value;
    ListNode* next;
};


void insert(ListNode*& head, int newValue) {
    ListNode* newNode = new ListNode();
    newNode->value = newValue;
    newNode->next = nullptr;

    if (head == nullptr || head->value >= newValue) {
        newNode->next = head;
        head = newNode;
    } else {
        ListNode* currentNode = head;
        while (currentNode->next != nullptr && currentNode->next->value < newValue) {
            currentNode = currentNode->next;
        }
        newNode->next = currentNode->next;
        currentNode->next = newNode;
    }
    cout << "Inserted " << newValue << " into the list.\n";
}


void insert_R(ListNode*& head, int count, int v1, int v100) {
    srand(time(0)); 
    for (int i = 0; i < count; ++i) {
        int randomValue = rand() % (v100 - v1 + 1) + v1;
        insert(head, randomValue); 
    }
}


void deleteNode(ListNode*& head, int targetValue) {
    if (head == nullptr) {
        cout << "List is empty.\n";
        return;
    }

    ListNode *current = head, *lastOccurrence = nullptr, *prevLastOccurrence = nullptr, *prev = nullptr;

    while (current != nullptr) {
        if (current->value == targetValue) {
            lastOccurrence = current;
            prevLastOccurrence = prev;
        }
        prev = current;
        current = current->next;
    }

    if (lastOccurrence == nullptr) {
        cout << "Element " << targetValue << " not found in the list.\n";
        return;
    }

    if (lastOccurrence == head) {
        head = head->next;
    } else {
        prevLastOccurrence->next = lastOccurrence->next;
    }
    delete lastOccurrence;
    cout << "Deleted the last occurrence of " << targetValue << " from the list.\n";
}


void search(ListNode* head, int targetValue) {
    if (head == nullptr) {
        cout << "List is empty.\n";
        return;
    }
    ListNode* currentNode = head;
    int position = 1;
    while (currentNode != nullptr) {
        if (currentNode->value == targetValue) {
            cout << "Element " << targetValue << " found at position " << position << " in the list.\n";
            return;
        }
        currentNode = currentNode->next;
        position++;
    }
    cout << "Element " << targetValue << " not found in the list.\n";
}


void display(ListNode* head) {
    if (head == nullptr) {
        cout << "List is empty.\n";
        return;
    }
    ListNode* currentNode = head;
    cout << "List elements: ";
    while (currentNode != nullptr) {
        cout << currentNode->value << " ";
        currentNode = currentNode->next;
    }
    cout << endl;
}


void menu() {
    ListNode* head = nullptr;
    int menuChoice, userValue;

    do {
        cout << "\nMenu:\n";
        cout << "1. Insert\n";
        cout << "2. Insert Random Numbers\n";
        cout << "3. Delete\n";
        cout << "4. Search\n";
        cout << "5. Display\n";
        cout << "6. Exit\n";
        cout << "Enter your choice: ";
        cin >> menuChoice;

        switch (menuChoice) {
        case 1: {
            int insertCount;
            cout << "Number of elements you want to insert: ";
            cin >> insertCount;
            while (insertCount--) {
                cout << "Enter value to insert: ";
                cin >> userValue;
                insert(head, userValue);
            }
            break;
        }
        case 2: {
            int count, lower, upper;
            cout << "How many random numbers to insert? ";
            cin >> count;
            cout << "Enter the lower bound (v1): ";
            cin >> lower;
            cout << "Enter the upper bound (v100): ";
            cin >> upper;
            insert_R(head, count, lower, upper);
            break;
        }
        case 3: {
            cout << "Before deletion:\n";
            display(head);
            cout << "Enter value to delete: ";
            cin >> userValue;
            deleteNode(head, userValue);
            cout << "After deletion:\n";
            display(head);
            break;
        }
        case 4:
            cout << "Enter value to search: ";
            cin >> userValue;
            search(head, userValue);
            break;
        case 5:
            display(head);
            break;
        case 6:
            cout << "Exiting program.\n";
            break;
        default:
            cout << "Invalid choice! Please try again.\n";
        }
    } while (menuChoice != 6);
}

int main() {
    menu();
    return 0;
}
