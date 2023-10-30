package java_first_project;
import java.util.Arrays;
import java.util.Scanner;

public class ArrEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//기초
//		int[] intArray = {1,2,3,4,5};
//		
//		for(int i=0;i<intArray.length;i++) {
//			System.out.print(intArray[i]+"");
//		}
		
		Scanner scan = new Scanner(System.in);
		int[] intArray = new int[5]; //크기가 5인 배열
		
		System.out.println("숫자 5개를 입력하세요");
		for(int i=0;i<intArray.length;i++) {
			intArray[i]=scan.nextInt();
					
		}
		
		System.out.print(Arrays.toString(intArray));
		//Array.toString 문자열 형태로 만들어줌
		
		//for-each문
		int sum = 0;
		for(int arr: intArray) {
			System.out.print(arr + " ");
			sum += arr;
		}
		System.out.println(sum);
		
		
	
		scan.close();
	}

}

 