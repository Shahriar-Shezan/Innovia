#include <bits/stdc++.h>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void insert(Node*& head, int data) {
    Node* newNode = new Node();
    newNode->data = data;
    newNode->next = nullptr;

    if (head == nullptr || head->data >= data) {
        newNode->next = head;
        head = newNode;
    } else {
        Node* current = head;
        while (current->next != nullptr && current->next->data < data) {
            current = current->next;
        }
        newNode->next = current->next;
        current->next = newNode;
    }
    cout << "Inserted " << data << " into the list.\n";
}

void deleteNode(Node*& head, int data) {
    if (head == nullptr) {
        cout << "List is empty.\n";
        return;
    }

    if (head->data == data) {
        Node* temp = head;
        head = head->next;
        delete temp;
        cout << "Deleted " << data << " from the list.\n";
        return;
    }

    Node* current = head;
    while (current->next != nullptr && current->next->data != data) {
        current = current->next;
    }

    if (current->next == nullptr) {
        cout << "Element " << data << " not found in the list.\n";
    } else {
        Node* temp = current->next;
        current->next = current->next->next;
        delete temp;
        cout << "Deleted " << data << " from the list.\n";
    }
}

void search(Node* head, int data) {
    Node* current = head;
    while (current != nullptr) {
        if (current->data == data) {
            cout << "Element " << data << " found in the list.\n";
            return;
        }
        current = current->next;
    }
    cout << "Element " << data << " not found in the list.\n";
}

void display(Node* head) {
    if (head == nullptr) {
        cout << "List is empty.\n";
        return;
    }
    Node* current = head;
    cout << "List elements: ";
    while (current != nullptr) {
        cout << current->data << " ";
        current = current->next;
    }
    cout << endl;
}

int main() {
    Node* head = nullptr;
    int choice, value;
    do {
        cout << "\nMenu:\n";
        cout << "1. Insert\n";
        cout << "2. Delete\n";
        cout << "3. Search\n";
        cout << "4. Display\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Number of elements you want to insert: ";
                int t;
                cin >> t;
                while (t--) {
                    cout << "Enter value to insert: ";
                    cin >> value;
                    insert(head, value);
                }
                break;
            case 2:
                cout << "Enter value to delete: ";
                cin >> value;
                deleteNode(head, value);
                break;
            case 3:
                cout << "Enter value to search: ";
                cin >> value;
                search(head, value);
                break;
            case 4:
                display(head);
                break;
            case 5:
                cout << "Exiting program.\n";
                break;
            default:
                cout << "Invalid choice! Please try again.\n";
        }
    } while (choice != 5);

    return 0;
}
