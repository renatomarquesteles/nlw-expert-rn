import { useState } from 'react';
import { FlatList, View } from 'react-native';

import { Header } from '@/components/header';
import { CategoryButton } from '@/components/category-button';
import { CATEGORIES } from '@/utils/data/products';

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleCategorySelection(selectedCategory: string) {
    setCategory(selectedCategory);
  }

  return (
    <View className="flex-1 pt-10">
      <Header title="Make your order" cartItemsQuantity={0} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={category === item}
            onPress={() => handleCategorySelection(item)}
          />
        )}
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        horizontal
      />
    </View>
  );
}
