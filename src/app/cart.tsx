import { ScrollView, Text, View } from 'react-native';

import { Header } from '@/components/header';
import { useCartStore } from '@/stores/cart-store';
import { Product } from '@/components/product';
import { formatCurrency } from '@/utils/format-currency';

export default function Cart() {
  const cartStore = useCartStore();
  const total = cartStore.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <View className="flex-1 pt-8">
      <Header title="Your Cart" />

      <ScrollView>
        {cartStore.products.length > 0 ? (
          <View className="p-5 flex-1">
            {cartStore.products.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </View>
        ) : (
          <Text className="font-body text-slate-400 text-center my-8">
            Your cart is empty.
          </Text>
        )}

        <View className="flex-row gap-2 items-center mt-5 mb-4">
          <Text className="text-white text-xl font-subtitle">Total:</Text>

          <Text className="text-lime-400 text-2xl font-heading">
            {formatCurrency(total)}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
