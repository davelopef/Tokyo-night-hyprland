package main

import "fmt"

func BinarySearch(arr []int, target int) int {
	low := 0
	high := len(arr) - 1

	for low <= high {
		mid := low + (high-low)/2 // Prevent potential overflow
		if arr[mid] == target {
			return mid
		} else if arr[mid] < target {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}
	return -1
}

func main() {
	arr := []int{2, 4, 6, 8, 10}
	target := 8

	index := BinarySearch(arr, target)
	if index != -1 {
		fmt.Printf("Found %d at index %d\n", target, index)
	} else {
		fmt.Println("Element not found")
	}
}
