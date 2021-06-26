class Shop{
    static getShopDetails(){
        var shopDetails={
            1: { bookid: 1, title: "aadujeevitham",auther:"basheer", price: 500, },
            2: { bookid: 2, title: "ente kadha",auther:"madhavikutty", price: 400, },
            3: { bookid: 3, title: "nalukettu",auther:"vasudhevan nair", price: 600, },
            4: { bookid: 4, title: "mathilukal",auther:"basheer", price: 550, },
            5: { bookid: 5, title: "balykalasakhi",auther:"basheer", price: 700, },
            
            
        }
        return shopDetails
    }

    static authenticateUser(title,auther) {
        let data = Shop.getShopDetails()
        if (title in data) {
            if (auther == data[title]["auther"]) {
                return 0
            }
            else {
                return 1
            }

        }
        else {
            return -1
        }

    }

    static Search() {
        let title = document.querySelector("#title1").value;
        let auther1 = document.querySelector("#auth").value;
        let data = Shop.getShopDetails()
        if (title in data) {
            
            if (auther1 == data[title]["auther"]) {
                alert("book exist ")
                window.location.href = "booklist.html";
            }
            else {
                alert("book doesn't exist")
            }
        }
        else {
            alert("invalid book")
        }


    }

}
