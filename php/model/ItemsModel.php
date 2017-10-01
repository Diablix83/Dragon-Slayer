<?php

	class ItemsModel extends Model{

		protected $table = 'project001_items';

		public function allArmors(){
			$request = $this->db->query("SELECT * FROM project001_armors");

			return $request->fetchAll();
		}

		public function allArmorTypes(){
			$request = $this->db->query("SELECT * FROM project001_armor_types");

			return $request->fetchAll();
		}

		public function allWeapons(){
			$request = $this->db->query("SELECT * FROM project001_weapons");

			return $request->fetchAll();
		}
	}
?>
