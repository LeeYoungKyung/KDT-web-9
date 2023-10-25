package java_interface;

interface Move {
	void moveForward();
	void moveBackward();
}

interface Power{
	void powerOn();
	void powerOff();
}

//인터페이스는 인터페이스를 상속 받을 수 있다
//다중 상속이 가능 
interface Car extends Move,Power{
	//car인터페이스는 5개됨
	//앞 뒤 기어 파워온 파워오프
	void changeGear(int gear);
}

class Suv implements Car{

	@Override
	public void moveForward() {
		System.out.println("앞으로");
		
	}

	@Override
	public void moveBackward() {
		System.out.println("뒤로");
		
	}

	@Override
	public void powerOn() {
		System.out.println("시동켬");
		
	}

	@Override
	public void powerOff() {
		System.out.println("시동끔");
		
	}

	@Override
	public void changeGear(int gear) {
		System.out.println("기어바꿈");
		
	}
	
}
public class InterfaceExample2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Suv mySuv = new Suv();
		mySuv.powerOn();
		mySuv.changeGear(5);
		mySuv.moveForward();
	}

}
