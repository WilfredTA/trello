json.merge! @board.attributes

json.lists(@board.lists) do |list|
  json.merge! list.attributes
end