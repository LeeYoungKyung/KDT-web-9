package java_interface;

interface Constants{
	
	//fimal 키워드
	//클래스에서 사용 : 상속될 수 없다. final class MyClass{}
	//메소드에서 사용 : 오버라이드 될 수 없다
	//변수에서 사용 : 값 변경이 불가
	//매개변수에서 사용 : 배개변수 값 변경 불가능 void func(final int x){}
	//
	public final int MAX_VALUE = 100;
	//public final생략
	double PI = 3.14;
	

}

class ConstantsEx implements Constants{
	void display() {
		System.out.println("Max Value : " +MAX_VALUE);
		System.out.println("PI : " + PI);
	}
}
public class interfaceExample3 {
	public static void main(String[]args) {
		ConstantsEx obj = new ConstantsEx();
		obj.display();
		
	}
}