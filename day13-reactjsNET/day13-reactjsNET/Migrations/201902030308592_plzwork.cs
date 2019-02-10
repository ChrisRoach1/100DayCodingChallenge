namespace day13_reactjsNET.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class plzwork : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.rooms",
                c => new
                    {
                        room_id = c.Int(nullable: false, identity: true),
                        room_name = c.String(nullable: false, maxLength: 255, unicode: false),
                        room_num = c.String(nullable: false, maxLength: 10, unicode: false),
                        room_desc = c.String(maxLength: 255, unicode: false),
                        capacity = c.Int(nullable: false),
                        void_ind = c.String(nullable: false, maxLength: 1, unicode: false),
                    })
                .PrimaryKey(t => t.room_id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.rooms");
        }
    }
}
