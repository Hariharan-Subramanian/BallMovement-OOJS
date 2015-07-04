  function Ball(ballx,bally,vx,vy,angle,speed,radians)
            {
                this.x=ballx;
                this.y=bally;
                this.vx=vx;
                this.vy=vy;
                this.radians=radians;
                this.angle=angle;
                this.speed=speed;
                this.counter=1;
                this.frameNo=0;
                this.isAlive=true;
                this.dir=1;
            }
            
                
            Ball.prototype.runs = function()    // Define Method
            {
                //this.speed-=0.2;
                if(this.speed<0)
                {
                    this.speed=0;
                }
                this.radians=this.angle*Math.PI/180;
                this.vx=Math.cos(this.radians)*this.speed;
                this.vy=Math.sin(this.radians)*this.speed; 
                if(this.y+this.vy<=10)
                {
                    this.angle=-this.angle;
                }else if(this.y+this.vy>=470)
                {
                    this.angle=-this.angle;
                }else if(this.x+this.vx>=760)
                {
                    this.vx=-2;
                    if( this.angle>=-360 &&  this.angle<-270)
                    {
                      
                        this.angle=this.angle+90;
                    }
                    else if( this.angle>270 &&  this.angle<=360)
                    {
                        this.angle= this.angle-90;
                    }
                    else if( this.angle>=-270 &&  this.angle<-180)
                    {
                        this.angle= this.angle-90;
                    }
                    else if( this.angle>=180 &&  this.angle<270)
                    {
                        this.angle= this.angle+90;
                    }
                    else if( this.angle>=-180 &&  this.angle<-90)
                    {
                        this.angle= this.angle-90;
                    }
                    else if( this.angle>=90 &&  this.angle<180)
                    {
                        this.angle= this.angle+90;
                    }
                    else if( this.angle>=-90 &&  this.angle<0)
                    {
                        this.angle=360-(90- this.angle);
                    }
                    else if( this.angle>=0 &&  this.angle<=90)
                    {
                        this.angle=360-(90- this.angle);
                    } 
                }else if(this.x+this.vx<=30)
                {
                    this.vx=-2;
                    if( this.angle>=-360 &&  this.angle<-270)
                    {
                        this.angle=this.angle+90;
                    }
                    else if( this.angle>270 &&  this.angle<=360)
                    {
                        this.angle= this.angle-90;
                    }
                    else if( this.angle>=-270 &&  this.angle<-180)
                    {
                        this.angle= this.angle-90;
                    }
                    else if( this.angle>=180 &&  this.angle<270)
                    {
                        this.angle= this.angle+90;
                    }
                    else if( this.angle>=-180 &&  this.angle<-90)
                    {
                        this.angle= this.angle-90;
                    }
                    else if( this.angle>=90 &&  this.angle<180)
                    {
                        this.angle= this.angle+90;
                    }
                    else if( this.angle>=-90 &&  this.angle<0)
                    {
                        this.angle=360-(90- this.angle);
                    }
                    else if( this.angle>=0 &&  this.angle<=90)
                    {
                        this.angle=360-(90- this.angle);
                    }
                }
                this.x=this.x+this.vx;
                this.y=this.y+this.vy;
            
            }	
		  
            