from pydantic import BaseModel


class UserCreate(BaseModel):
    username: str
    email: str
    password: str
    role: str


class UserLogin(BaseModel):
    email: str
    password: str
    
class UserUpdate(BaseModel):
    username: str
    email: str
    role: str    
    
class StoreCreate(BaseModel):
    name: str
    location: str
    manager: str


class StoreUpdate(BaseModel):
    name: str
    location: str
    manager: str
    
class ShelfCreate(BaseModel):
    shelf_number: str
    section: str
    store_name: str


class ShelfUpdate(BaseModel):
    shelf_number: str
    section: str
    store_name: str
    
class CameraCreate(BaseModel):
    camera_number: str
    location: str
    shelf_number: str


class CameraUpdate(BaseModel):
    camera_number: str
    location: str
    shelf_number: str