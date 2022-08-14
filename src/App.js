import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Colors from "./components/Colors/Colors";
import Price from "./components/Price/Price";
import { AllProducts } from "./Mock/Mock";

function App() {
  const products = AllProducts.data.allContentfulProductPage.edges.map(
    (item) => {
      return {
        tags: item.node.categoryTags
          ? item.node.categoryTags.map((item) =>
              item.trim().toLocaleLowerCase()
            )
          : [],
        color: item.node.colorFamily ? item.node.colorFamily[0].name : "-",
        price: item.node.shopifyProductEu.variants.edges[0].node.price,
        img: item.node.thumbnailImage.file.url,
      };
    }
  );

  const [price, setPrice] = useState([]);
  const [filtred, setFiltred] = useState(products);
  const [chekedCategory, setChekedCategory] = useState([]);
  const [chekedColor, setChekedColor] = useState([]);

  useEffect(() => {
    setFiltred(products);
  }, []);

  const filterByCategory = (arr1, arr2) => {
    let res = [];
    res = arr1.filter((el) => {
      return arr2.find((element) => {
        return element.tags.includes(el);
      });
    });

    const tags = arr2.filter((item) => res.find((i) => item.tags.includes(i)));
    return tags;
  };

  const filterBycolor = (arr1, arr2) => {
    const colors = arr2.filter((item) =>
      arr1.find((i) => i === item.color.toLowerCase())
    );
    return colors;
  };

  useEffect(() => {
    if (chekedCategory.length > 0) {
      setFiltred(filterByCategory(chekedCategory, products));
    }
    if (!chekedCategory.length) {
      setFiltred(products);
    }
  }, [chekedCategory]);

  useEffect(() => {
    if (chekedColor.length > 0) {
      setFiltred(filterBycolor(chekedColor, products));
    }
    if (!chekedColor.length) {
      setFiltred(products);
    }
  }, [chekedColor]);

  useEffect(() => {
    if (price.length > 0) {
      setFiltred(
        filtred.filter(
          (item) => +item.price >= +price[0] && +item.price <= +price[1]
        )
      );
    }

    if (price[0] === 0 && price[1] === 0) {
      setFiltred(products);
    }
  }, [price]);

  console.log(price);

  return (
    <div className="App">
      <Header />
      <Categories setChekedCategory={setChekedCategory} />
      <Colors setChekedColor={setChekedColor} />
      <Price setPrice={setPrice} />
      <Products products={filtred} />

      <Footer />
    </div>
  );
}

export default App;
