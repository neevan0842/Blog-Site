from rest_framework import serializers 
from django.contrib.auth.models import User
from .models import Post, Comment , Category

class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    categories = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    
    class Meta:
        model = User
        fields = ["id","username","email","posts","comments","categories"]
        
    def create(self, validated_data):
        user = User.objects.create_user(username=validated_data["username"],email=validated_data["email"],password=validated_data["password"])
        user.save()
        return user
    
class PostSerializer(serializers.ModelSerializer):
        owner = serializers.ReadOnlyField(source='owner.username')
        comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
        categories = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
        
        class Meta:
            model = Post
            fields = ["id","title","body","owner","comments","categories"]
            
class CommentSerializer(serializers.ModelSerializer):
        owner = serializers.ReadOnlyField(source='owner.username')
        
        class Meta:
            model = Comment
            fields = ["id","body","owner","post"]
            
class CategorySerializer(serializers.ModelSerializer):
        owner = serializers.ReadOnlyField(source='owner.username')
        posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
        
        class Meta:
            model = Category
            fields = ["id","name","owner","posts"]