class Red extends eui.Component implements  eui.UIComponent {
	public m_mask:eui.Rect;
	public y_red:eui.Image;

	private static shared: Red;
	public static Shared(): Red {
		if (Red.shared == null) {
			Red.shared = new Red();
		}
		return Red.shared;
	}
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		egret.Tween.get(this.y_red).wait(2000).to({"visible":true},500);

		this.m_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleMask, this);
	}

	private handleMask() {
		this.parent.removeChild(this);
	}
	
}