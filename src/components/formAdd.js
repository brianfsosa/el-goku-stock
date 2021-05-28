import { React, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Button,
  Select,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";

function FormAdd(props) {
  const initialStateValues = { name: "", cantidad: 1, ubication: 1 };
  const [values, setValues] = useState(initialStateValues);
  const toast = useToast();
  const handleImputChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
    setValues({ ...initialStateValues });

    toast({
      tittle: "Producto Agregado",
      description: "Producto Agregado",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <FormControl id="product">
            <FormLabel>Producto</FormLabel>
            <Input
              placeholder="Ej: Otro loco más"
              onChange={handleImputChange}
              name="name"
              value={values.name}
            />
          </FormControl>
          <SimpleGrid columns={2} spacing={10}>
            <FormControl id="amount" h={20}>
              <FormLabel>Cantidad</FormLabel>
              <NumberInput value={values.cantidad}>
                <NumberInputField
                  onChange={handleImputChange}
                  name="cantidad"
                  value={values.cantidad}
                  inputMode="numeric"
                />
              </NumberInput>
            </FormControl>
            <FormControl id="ubication" h={20}>
              <FormLabel>Estante</FormLabel>
              <Select
                onChange={handleImputChange}
                name="ubication"
                value={parseInt(values.ubication)}
                inputMode="numeric"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </Select>
            </FormControl>
          </SimpleGrid>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Agregar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default FormAdd;
