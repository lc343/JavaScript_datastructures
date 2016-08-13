/**
 * Created by lc on 2016/8/11.
 */
function BinarySearchTree(){
    var Node=function(key){
        this.key=key;
        this.left=null;
        this.right=null;
    };
    var root=null;
    this.insert=function(key){
        var newNode=new Node(key);
        if(root==null){
            root=newNode;
        }
        else{
            insertNode(root,newNode)
        }

    };

    var insertNode=function(node,newNode){
      if(newNode.key<node.key){
          if(node.left==null){
             node.left=newNode;
          }
          else{
              insertNode(node.left,newNode);
          }
      }
      else{
          if(node.right==null){
              node.right=newNode;
          }
          else{
              insertNode(node.right,newNode);
          }
      }
    };
    this.min=function(){
        return minNode(root);
    };
    function minNode(node){
        if(node){
            while(node.left!=null&&node){
                node=node.left;
            }
            return node.key;
        }
        return null;
    }
    this.max=function(){
        return maxNode(root);
    };
    function maxNode(node){
        if(node){
            while(node.right!=null&&node){
                node=node.right;
            }
            return node.key;
        }
        return null;
    }

    this.search=function(key){
        return searchNode(root,key);
    };
    function searchNode(node,key){
        if(node==null){
            return false;
        }
        if(key<node.key){
            return searchNode(node.left,key);
        }
        else if(key>node.key){
            return searchNode(node.right,key);
        }
        else{
            return true;
        }
    }
    this.remove=function(key){
        root=removeNode(root,key);
    };
    function removeNode(node,key){
        if(node==null){
            return null;
        }
        if(key<node.key){
            node.left=removeNode(node.left,key);
            return node;
        }
        else if(key>node.key){
            node.right=removeNode(node.right,key);
            return node;
        }
        else{
            //ɾ������Ҷ�ӽڵ�
                if(node.left==null&&node.right==null){
                    node=null;
                    return node;
                }
                //ɾ������ֻ��һ���ӽڵ�Ľڵ�
                if(node.left==null){
                    node=node.right;
                    return node;
                }
                else if(node.right==null){
                    node=node.left;
                    return node;
                }
            //ɾ���������ӽڵ�Ľڵ�
                var aux=findMinNode(node.right);
                node.key=aux.key;
                node.right=removeNode(node.right,aux.key);
                return node;
            }
    }
    function findMinNode(node){
        if(node){
            while(node&&node.left!=null){
                node=node.left;
            }
            return node;
        }
        else{
            return null;
        }
    }
}

