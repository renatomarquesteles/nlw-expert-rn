import { Alert, ScrollView, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Feather } from '@expo/vector-icons';

import { Header } from '@/components/header';
import { useCartStore } from '@/stores/cart-store';
import { Product } from '@/components/product';
import { formatCurrency } from '@/utils/format-currency';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { LinkButton } from '@/components/link-button';
import { ProductProps } from '@/utils/data/products';

export default function Cart() {
  const cartStore = useCartStore();
  const total = cartStore.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  function handleProductRemove(product: ProductProps) {
    Alert.alert(
      'Remove product',
      `Would you like to remove 1x ${product.title} from your cart?`,
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            cartStore.remove(product.id);
          },
        },
      ]
    );
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Your Cart" />

      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="p-5 flex-1">
            {cartStore.products.length > 0 ? (
              <View className="border-b border-slate-700">
                {cartStore.products.map((product) => (
                  <Product
                    key={product.id}
                    data={product}
                    onPress={() => handleProductRemove(product)}
                  />
                ))}
              </View>
            ) : (
              <Text className="font-body text-slate-400 text-center my-8">
                Your cart is empty.
              </Text>
            )}
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>

      <View className="p-5 gap-5">
        <View className="flex-row gap-2 items-center mt-5 mb-4">
          <Text className="text-white text-xl font-subtitle">Total:</Text>

          <Text className="text-lime-400 text-2xl font-heading">
            {formatCurrency(total)}
          </Text>
        </View>

        <Input placeholder="Inform your address: street, number, zipcode, complement..." />

        <Button disabled={cartStore.products.length === 0}>
          <Button.Text>Send order</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>

        <LinkButton title="Back to Menu" href="/" />
      </View>
    </View>
  );
}
