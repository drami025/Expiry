
URL_by_letter="http://www.fmi.org/industry-topics/consumer-affairs/food-keeper-food-storage-database/food-keeper-by-letter?fk-letter=";

for x in {A..Z}
do
    url=$URL_by_letter$x;
    curl -s $url | grep -o food-keeper-by-letter/'[^"]*' | sed 's/food-keeper-by-letter\///' >> food_items.txt;
done
