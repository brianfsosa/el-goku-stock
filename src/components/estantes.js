import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  useToast,
  Tag,
  Center,
} from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import FormAdd from "./formAdd";
import { db } from "../firebase";

const loadProducts = async (productObjet) => {
  await db.collection("products").doc().set(productObjet);
};

function Estante() {
  const [data, setData] = useState([
    /* {id:1, name:"otro loco ", cantidad:14, ubication:1},{id:2, name:"otro loco   ", cantidad:14, ubication:1},
        {id:3, name:"santa julia", cantidad:14 , ubication:2},{id:4, name:"santa julia", cantidad:14 , ubication:2},{id:5, name:"santa julia", cantidad:14, ubication:2},
        {id:6, name:"otro loco ", cantidad:14, ubication:3},{id:7, name:"otro loco", cantidad:14, ubication:3},
        {id:8, name:"santa julia", cantidad:14, ubication:4},{id:9, name:"santa julia", cantidad:14, ubication:4},{id:10, name:"santa julia", cantidad:14, ubication:4},
        {id:13, name:"otro loco ", cantidad:14, ubication:5},{id:14, name:"otro ", cantidad:14, ubication:5},
        {id:11, name:"portillo", cantidad:12, ubication:6},{id:12, name:"santa julia", cantidad:14, ubication:6} */
  ]);
  const [dataToRender, setDataToRender] = useState([]);

  const toast = useToast();

  const getProducts = async () => {
    db.collection("products").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setData(docs);
      setDataToRender(docs);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  function render(pToRender) {
    return (
      <div>
        {renderFloor(1, pToRender)}
        {renderFloor(2, pToRender)}
        {renderFloor(3, pToRender)}
        {renderFloor(4, pToRender)}
        {renderFloor(5, pToRender)}
        {renderFloor(6, pToRender)}
      </div>
    );
  }

  const handleSearch = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setDataToRender(data);
    } else {
      const toFilter = data.filter((p) => p.name === e.target.value);
      setDataToRender(toFilter);
      console.log(toFilter);
    }
  };

  const addOne = async (dataProduct) => {
    const suma = parseInt(parseInt(dataProduct.cantidad) + 1);
    await db
      .collection("products")
      .doc(dataProduct.id)
      .update({ cantidad: suma });
    toast({
      tittle: dataProduct.name + " +1",
      description: dataProduct.name + " +1",
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const removeOne = async (dataProduct) => {
    const resta = parseInt(parseInt(dataProduct.cantidad) - 1);
    await db
      .collection("products")
      .doc(dataProduct.id)
      .update({ cantidad: resta });
    toast({
      tittle: dataProduct.name + " -1",
      description: dataProduct.name + " -1",
      status: "warning",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Borrar Producto?")) {
      await db.collection("products").doc(id).delete();
      toast({
        tittle: "Producto Eliminado",
        description: "Producto Eliminado",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  function product(floor, productsToFilter) {
    const products = productsToFilter.filter(
      (p) => parseInt(p.ubication) === floor
    );

    return products.map((d) => {
      return (
        <Tr key={d.id}>
          <Td width="300px" marginRight="-10">
            {d.name} <Tag size="sm">{parseInt(d.cantidad)}</Tag>
          </Td>

          <Td paddingLeft="5" paddingRight="5">
            <Center>
              <Button
                size="xs"
                colorScheme="blue"
                onClick={() => addOne(d)}
                marginRight="1"
              >
                +
              </Button>
              <Button
                marginRight="1"
                size="xs"
                colorScheme="orange"
                onClick={() => removeOne(d)}
              >
                -
              </Button>
              <Button
                size="xs"
                colorScheme="red"
                onClick={() => deleteProduct(d.id)}
              >
                x
              </Button>
            </Center>
          </Td>
        </Tr>
      );
    });
  }

  function renderFloor(floorNumber, productToRender) {
    return (
      <div>
        <br></br>
        <Heading as="h3" size="sm">
          <Tag colorScheme="blue"> Estante {floorNumber} </Tag>
        </Heading>
        <br></br>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>PRODUCTO</Th>
              <Th>
                <Center>ACCIONES</Center>
              </Th>
            </Tr>
          </Thead>
          <Tbody>{product(floorNumber, productToRender)}</Tbody>
        </Table>
      </div>
    );
  }

  return (
    <div>
      <FormAdd addOrEdit={loadProducts}></FormAdd>
      <Input
        placeholder="Buscar"
        size="sm"
        m="20px"
        w="300px"
        onChange={handleSearch}
      />
      {render(dataToRender)}
    </div>
  );
}
export default Estante;
