package java_interface;

abstract class Vehicle {
	private String name;
	private int maxSpeed;
	
	public Vehicle(String name, int maxSpeed) {
		this.name = name;
		this.maxSpeed = maxSpeed;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getMaxSpeed() {
		return maxSpeed;
	}

	public void setMaxSpeed(int maxSpeed) {
		this.maxSpeed = maxSpeed;
	}
	
	//추상메서드
	abstract public void move();
}

//인터페이스
interface Flyable2 {
	void fly();
}

class Car2 extends Vehicle {
	public Car2(String name, int maxSpeed) {
		super(name, maxSpeed);
	}
	
	@Override 
	public void move() {
		System.out.println("도로를 따라 이동 중");
	}
}

class Airplane2 extends Vehicle implements Flyable2 {

	public Airplane2(String name, int maxSpeed) {
		super(name, maxSpeed);
	}
	@Override
	public void move() {
		System.out.println("하늘을 날아가는중");
	}
	
	@Override
	public void fly() {
		System.out.println("고도 10,000피트에서 비행중");
	}

	
}

public class PracticeClass {

	public static void main(String[] args) {
//		Car2 car = new Car2("bmw", 150);
//		Airplane2 airplane = new Airplane2("Boeing", 1000);
//		car.move();
//		airplane.move();
//		airplane.fly();
		Vehicle[] vehicles = { new Car2("bmw", 150), new Airplane2("Boeing", 1000) };
		
		for( Vehicle v: vehicles) {
			System.out.println(v.getName() + "의 속도는 : " + v.getMaxSpeed());
			v.move();
			//instanceof: 객체가 특정 클래스나 인터페이스의 인스턴스인지 확인하는 연산자
			if( v instanceof Flyable2) {
				((Flyable2)v).fly();
			}
			
		}

	}

}